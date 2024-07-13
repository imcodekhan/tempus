import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { database, storage } from "../../firebase";
import TimeChips from "../../Components/TimeChips";
import { v4 as uuid } from "uuid";
import { ref as dbRef, set } from "firebase/database";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import seal from "../../assets/seal.png";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const Creation = () => {
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [selectedTime, setSelectedTime] = useState(300);
  const [customDate, setCustomDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    },
    [storage, database]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "images/*",
  });

  function handleCreate() {
    const id = uuid();

    setIsLoading(true);
    setIsOpen(true);
    const storageRef = ref(storage, `images/${id}`);

    uploadBytes(storageRef, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            set(dbRef(database, "timecapsules/" + id), {
              message,
              image: url,
              timestamp:
                selectedTime === "custom"
                  ? customDate
                  : new Date().getTime() + selectedTime * 1000,
            })
              .then((response) => {
                setUrl("/capsule/" + id);
                setIsLoading(false);
                setImage(false);
                setCustomDate(false);
                setMessage("");
                setSelectedTime(300);
                setPreview(null);
              })
              .catch((error) => {
                setIsLoading(false);
              });
          })
          .catch((error) => {
            console.error("Error getting download URL: ", error);
          });
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  }

  return (
    <>
      {isOpen && (
        <Modal isOpen={true} onClose={() => setUrl(null)} isCentered>
          <ModalOverlay />
          <ModalContent>
            {isLoading ? (
              <>
                <ModalHeader className="bg-blue-500">
                  <div className="  text-4xl flex justify-center items-center">
                    your timesnap is brewing...
                  </div>
                </ModalHeader>
                <ModalBody>
                  <div className="flex justify-center items-center">
                    <img
                      src={seal}
                      alt="Rotating"
                      className="w-40 h-40 animate-spin duration-700"
                    />
                  </div>
                </ModalBody>
              </>
            ) : (
              <>
                <ModalHeader className="bg-blue-500 ">
                  <div className="text-4xl">
                    your message been delivered to future:
                  </div>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <div className="text-blue-950 text-3xl">
                    please save the url and share it with your friends &nbsp;
                    <div className="bg-green-200 rounded-sm p-2">
                      {location.host + url}
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="text-3xl mr-10"
                    onClick={() =>
                      navigator.clipboard.writeText(location.host + url)
                    }
                  >
                    <div className="text-3xl">Copy</div>
                  </Button>
                  <Button onClick={() => window.open(url, "_self")}>
                    <div className="text-3xl"> visit</div>
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
      <div className="h-full w-full flex  p-24 gap-1">
        <div className="border w-6/12">
          {preview ? (
            <div className="flex justify-center h-full relative">
              <img src={preview} alt="Preview" />
              <button
                className="absolute right-0 text-red-500 text-5xl"
                onClick={() => setPreview(null)}
              >
                X
              </button>
            </div>
          ) : (
            <div {...getRootProps()} className="border-2 w-full h-full">
              <input className="self-center" {...getInputProps()} />
              <div className="border-dashed h-full w-full flex justify-center items-center text-5xl">
                {isDragActive ? (
                  <p>Drop the file here ...</p>
                ) : (
                  <p>Drag the file here, or click to select file</p>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="ml-24 flex flex-col h-full w-6/12">
          <textarea
            className="text-indigo-950 text-5xl p-12"
            name="content"
            placeholder="Type your message here..."
            onChange={(e) => setMessage(e.target.value)}
            cols="30"
            rows="5"
          />
          <TimeChips
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            customDate={customDate}
            setCustomDate={setCustomDate}
          />
          <div className="flex w-full justify-center">
            <button
              className="text-4xl border rounded-lg  w-min p-4"
              onClick={handleCreate}
            >
              create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creation;

import { useState, useEffect } from "react";
import Modal from "react-modal";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Button from "./common/Button";
import Cards from "./components/Cards";
import { CardData } from "./data";
import instance from "./api/axiosInstance";

Modal.setAppElement("#root");

function App() {
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState<CardData[]>([]);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const fetchJobs = async () => {
    try {
      const res = await instance.get("/");
      setJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [modalIsOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPage(1);
  };

  return (
    <div className="p-5">
      <Button type="primary" onClick={openModal} classes="mb-5">
        Create Job
      </Button>
      <Modal
        shouldCloseOnOverlayClick
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
        overlayClassName="h-screen flex justify-center items-center fixed top-0 right-0 left-0 bottom-0 bg-overlayColor"
        className="min-h-formHeight w-formWidth border rounded-formBorderRadius border-solid border-cardBorder p-formPadding flex flex-col gap-formGap bg-cardColor"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-formHeading">Create a job</h2>
          <p className="text-pageNumber font-pageNumber">Step {page}</p>
        </div>
        {page === 1 ? (
          <Page1 setPage={setPage} />
        ) : (
          <Page2 closeModal={closeModal} />
        )}
      </Modal>
      <Cards jobs={jobs} fetchJobs={fetchJobs} />
    </div>
  );
}

export default App;

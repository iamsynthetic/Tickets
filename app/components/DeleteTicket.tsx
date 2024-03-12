import { useRouter } from "next/navigation";
import { XcloseIcon } from "./Icons";
import { useAppContext } from "../context";

const DeleteTicket = ({ id }: any) => {
  const router = useRouter();
  const { setDeletedTicket } = useAppContext();

  const deleteTheTicket = async () => {
    console.log("deleteticket.tsx id is: " + id);
    const res = await fetch(`/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setDeletedTicket(id);
      router.refresh();
    }
  };

  return (
    <div className="tooltip tooltip-style" data-tip="delete this?">
      <button
        className="btn btn-square btn-closex btn-outline btn-sm"
        onClick={deleteTheTicket}
      >
        <XcloseIcon />
      </button>
    </div>
  );
};

export default DeleteTicket;

import React from "react";
import NoteButtonAction from "./NoteButtonAction";

function NoteItemAction() {
    return (
        <div className="note-item__action">
            <NoteButtonAction className={"note-item__delete-button"} actionName={"Delete"} />
            <NoteButtonAction className={"note-item__archive-button"} actionName={"Arsipkan"} />
        </div>
    );
};

export default NoteItemAction;
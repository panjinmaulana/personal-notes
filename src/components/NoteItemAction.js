import React from "react";
import NoteButtonAction from "./NoteButtonAction";

function NoteItemAction({ id, onDelete, onArchive }) {
    return (
        <div className="note-item__action">
            <NoteButtonAction
                className={"note-item__delete-button"}
                displayName={"Delete"}
                id={id}
                actionName={onDelete}
            />
            <NoteButtonAction
                className={"note-item__archive-button"}
                displayName={"Arsipkan"}
                id={id}
                actionName={onArchive}
            />
        </div>
    );
};

export default NoteItemAction;
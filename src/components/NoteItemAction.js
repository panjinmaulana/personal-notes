import React from "react";
import NoteButtonAction from "./NoteButtonAction";

function NoteItemAction({ id, onDelete, onArchive, isArchived }) {
    return (
        <div className="note-item__action">
            <NoteButtonAction
                className={"note-item__delete-button"}
                displayName={"Delete"}
                id={id}
                actionName={onDelete}
                isArchived={isArchived}
            />
            <NoteButtonAction
                className={"note-item__archive-button"}
                displayName={isArchived ? "Pindahkan" : "Arsipkan"}
                id={id}
                actionName={onArchive}
                isArchived={isArchived}
            />
        </div>
    );
};

export default NoteItemAction;
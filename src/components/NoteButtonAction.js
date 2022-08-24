import React from "react";

function NoteButtonAction({ className, displayName, id, actionName }) {
    return (
        <button type="button"
            className={className}
            onClick={() => actionName(id)}
        >
            {displayName}
        </button>
    );
};

export default NoteButtonAction;
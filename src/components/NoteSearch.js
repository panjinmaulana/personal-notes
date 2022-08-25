import React from "react";

function NoteSearch({ onSearch }) {
    return (
        <div className="note-search">
            <input
                type="text"
                placeholder="Cari catatan ..."
                autoFocus
                autoComplete="off"
                onChange={(e) => onSearch(e.target.value)}
                maxLength={50}
            />
        </div>
    );
};

export default NoteSearch;
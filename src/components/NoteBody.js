import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteListEmptyMessage from "./NoteListEmptyMessage";
import { getInitialData } from "../utils/index";

class NoteBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    };

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    };

    render() {
        return (
            <div className="note-app__body">
                <NoteInput />
                {
                    this.state.notes.length
                        ?
                        <>
                            <h2>Catatan Aktif</h2>
                            <NoteList
                                notes={this.state.notes}
                                onDelete={this.onDeleteHandler}
                            />
                        </>
                        :
                        <NoteListEmptyMessage />
                }
                {
                    this.state.notes.length
                        ?
                        <>
                            <h2>Arsip</h2>
                            <NoteList
                                notes={this.state.notes}
                                onDelete={this.onDeleteHandler}
                            />
                        </>
                        :
                        <NoteListEmptyMessage />
                }
            </div>
        );
    };
};

export default NoteBody;
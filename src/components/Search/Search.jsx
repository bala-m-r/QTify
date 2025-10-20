import React from "react";
import styles from "./Search.module.css";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Listbox = styled("ul")(() => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "auto",
  left: 0,
  right: 0,
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

export default function Search({ searchData, placeholder }) {
  const {
    getRootProps,
    value,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "qtify-search",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
  });

  const navigate = useNavigate();
  const onSubmit = (e, val) => {
    e.preventDefault();
    if (val && val.slug) navigate(`/album/${val.slug}`);
  };

  return (
    <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          onSubmit(e, value);
        }}
      >
        <div {...getRootProps()}>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            {...getInputProps()}
          />
        </div>
        <div>
          <button className={styles.searchButton} type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li className={styles.listElement} {...getOptionProps({ option, index })}>
              <div>
                <p className={styles.albumTitle}>{option.title}</p>
              </div>
            </li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
    </svg>
  );
}



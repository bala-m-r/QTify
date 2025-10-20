import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "../Section/Section.module.css";

export default function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [value, setValue] = useState(0); // index of selected genre

  useEffect(() => {
    const load = async () => {
      const [songsRes, genresRes] = await Promise.all([
        axios.get("https://qtify-backend.labs.crio.do/songs"),
        axios.get("https://qtify-backend.labs.crio.do/genres"),
      ]);
      setSongs(songsRes.data);
      setGenres(genresRes.data.data);
    };
    load();
  }, []);

  const activeGenre = genres[value]?.key || "all";

  const filtered = useMemo(() => {
    if (activeGenre === "all") return songs;
    return songs.filter((s) => s.genre.key === activeGenre);
  }, [songs, activeGenre]);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Songs</h2>
      </div>
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        textColor="inherit"
        TabIndicatorProps={{ style: { background: "var(--color-primary)" } }}
        sx={{
          
          "& .MuiTab-root": { color: "#bbb" },
          "& .Mui-selected": { color: "var(--color-primary)" },
          marginBottom: 2,
        }}
      >
        {genres.map((g, idx) => (
          <Tab key={g.key || idx} label={g.label} />
        ))}
      </Tabs>
      <Carousel
        items={filtered}
        renderItem={(item) => (
          <Card
            image={item.image}
            title={item.title}
            likes={item.likes}
            showLikes
          />
        )}
      />
    </section>
  );
}



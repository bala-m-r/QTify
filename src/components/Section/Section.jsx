import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import axios from "axios";

export default function Section({ title, endpoint }) {
  const [items, setItems] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(endpoint);
      setItems(data);
    };
    fetchData();
  }, [endpoint]);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Button onClick={() => setCollapsed((c) => !c)}>
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      </div>
      {collapsed ? (
        <Carousel
          items={items}
          renderItem={(item) => (
            <Card image={item.image} title={item.title} follows={item.follows} />
          )}
        />
      ) : (
        <div className={styles.grid}>
          {items.map((item) => (
            <Card key={item.id} image={item.image} title={item.title} follows={item.follows} />
          ))}
        </div>
      )}
    </section>
  );
}



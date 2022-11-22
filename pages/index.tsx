// pages/index.tsx

import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import InfoCard from "../components/InfoCard";
import { Button, Grid } from "@nextui-org/react";
import { IUser } from "../types/User";

const Layout = dynamic(() => import("../ui/Layout"));

const Home: NextPage = () => {
  // Using client-side data fetching
  const [items, setItems] = useState<IUser[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState(1);

  // Function to fetch data
  async function getUsers(page: number) {
    await fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setTotal(data.total);
        setItems([...items, ...data.data]);
      });
  }

  // Fetch first page initially
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setTotal(data.total);
        setItems(data.data);
      });
  }, []);

  return (
    <Layout>
      <Grid.Container
        gap={1}
        justify="center"
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        {items.map((val, index) => (
          <Grid sm={4} key={index}>
            <InfoCard
              id={val.id}
              email={val.email}
              first_name={val.first_name}
              last_name={val.last_name}
              avatar={val.avatar}
            />
          </Grid>
        ))}
      </Grid.Container>
      {items.length < total && (
        <Button onPress={() => getUsers(page + 1)}>Load More</Button>
      )}
    </Layout>
  );
};

export default Home;

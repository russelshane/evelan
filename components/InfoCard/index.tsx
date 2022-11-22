// components/Card/index.tsx

import type { FC } from "react";
import React from "react";
import { Container, Card, Row, Text, Avatar } from "@nextui-org/react";
import { IUser } from "../../types/User";

const InfoCard: FC<IUser> = ({ id, email, first_name, last_name, avatar }) => {
  return (
    <Container>
      <Card css={{ $$cardColor: "$colors$primary" }}>
        <Card.Body>
          <Row
            justify="center"
            align="center"
            style={{ flexDirection: "column", gridGap: 10 }}
          >
            <Avatar size="lg" src={avatar} />
            <Text h4 color="white" css={{ m: 5, textAlign: "center" }}>
              {id}
            </Text>
            <Text h4 color="white" css={{ m: 5, textAlign: "center" }}>
              {email}
            </Text>
            <Text h4 color="white" css={{ m: 5, textAlign: "center" }}>
              {`${first_name} ${last_name}`}
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default InfoCard;

import React from "react";
import propTypes from "prop-types";
import {
  Content,
  OriginalRoom,
  AcomodatedRoom,
  LightedCell,
  LightCell,
  WallCell,
  EmptyCell,
} from "./ShowRoom.styled";
const ShowRoom = ({ response }) => {
  return (
    <Content>
      <OriginalRoom>
        {response && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${response.room_width}, 1fr)`,
              gridTemplateRows: `repeat(${response.room_height}, 1fr)`,
            }}
          >
            {response.room &&
              response.room.map((line) => {
                return line.map((element, index) => {
                  if (element == 0) return <EmptyCell key={index} />;
                  if (element == 1) return <WallCell key={index} />;
                  if (element == "*") return <LightCell key={index} />;
                  if (element == "-") return <LightedCell key={index} />;
                });
              })}
          </div>
        )}
      </OriginalRoom>
      <AcomodatedRoom>
        {response && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${response.room_width}, 1fr)`,
              gridTemplateRows: `repeat(${response.room_height}, 1fr)`,
            }}
          >
            {response.room_filled &&
              response.room_filled.map((line) => {
                return line.map((element, index) => {
                  if (element == 0) return <WallCell key={index} />;
                  if (element == "*") return <LightCell key={index} />;
                  if (element == "-") return <LightedCell key={index} />;
                });
              })}
          </div>
        )}
      </AcomodatedRoom>
    </Content>
  );
};

ShowRoom.propTypes = {
  response: propTypes.object.isRequired,
};

export default ShowRoom;

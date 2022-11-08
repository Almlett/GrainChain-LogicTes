import React, { useState } from "react";
import propTypes from "prop-types";
import {
  Content,
  Title,
  File,
  Submit,
  FileManager,
  ResponseManager,
  ResponseStatus,
  RoomSize,
  RoomLigths,
  RoomLightsLabel,
  Information,
  InformationLine,
} from "./UploadFile.styled";
import { LightedCell, LightCell, WallCell, EmptyCell } from "./ShowRoom.styled";
const UploadFile = ({ response, setResponse }) => {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    fetch("upload/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch((err) => setResponse(err));
  };
  return (
    <Content>
      <FileManager>
        <Title>Ligth Room</Title>
        <File type="file" onChange={handleFile} />
        <Submit onClick={handleSubmit}>Submit</Submit>
      </FileManager>
      {response && (
        <ResponseManager>
          <ResponseStatus>{response.message.message}</ResponseStatus>
          {response.status_code === 200 && (
            <RoomSize>
              Room size: {response.room_height} x {response.room_width}
            </RoomSize>
          )}
          {response.status_code === 200 && (
            <div>
              <RoomLightsLabel>Total Ligths: </RoomLightsLabel>
              <RoomLigths>{response.total_lights}</RoomLigths>
            </div>
          )}
        </ResponseManager>
      )}
      <Information>
        {response && response.status_code === 200 && (
          <>
            <InformationLine>
              <EmptyCell /> - Empty Cell
            </InformationLine>
            <InformationLine>
              <WallCell /> - Wall Cell
            </InformationLine>
            <InformationLine>
              <LightCell /> - Light Cell
            </InformationLine>
            <InformationLine>
              <LightedCell /> - Lighted Cell
            </InformationLine>
          </>
        )}
      </Information>
    </Content>
  );
};

UploadFile.propTypes = {
  setResponse: propTypes.func.isRequired,
  response: propTypes.object.isRequired,
};

export default UploadFile;

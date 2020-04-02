import React from "react";
import styled from "styled-components";
import { Card, Colors, HTMLTable } from "@blueprintjs/core";

const TabloWrapper = styled(Card)`
  padding: 0;
`;

const Tablo = styled(HTMLTable).attrs({
  striped: true,
  bordered: true
})`
  width: 100%;
`;

const Baslik = styled.th`
  background: ${Colors.LIGHT_GRAY1};
`;

const getColumn = column => {
  switch (typeof column) {
    case "string":
      return column;
    case "object":
      return column.title;
  }
};
const getRow = (column, item) => {
  switch (typeof column) {
    case "string":
      return item[column.toLowerCase()];
    case "object":
      if (typeof column.accessor === "string") return item[column.accessor];
      else if (typeof column.accessor === "function")
        return column.accessor(item);
      else return null;
    default:
      return null;
  }
};

export default props => {
  return (
    <TabloWrapper>
      <Tablo>
        <thead>
          <tr>
            {props.columns.map((column, i) => (
              <Baslik key={i}>{getColumn(column)}</Baslik>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => (
            <tr key={item.id || index}>
              {props.columns.map((column, i) => (
                <td key={i}>{getRow(column, item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Tablo>
    </TabloWrapper>
  );
};

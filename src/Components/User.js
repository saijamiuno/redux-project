import React, { useState } from "react";
import {
  Button,
  Tag,
  Popover,
  Row,
  Col,
  // notification,
  // Popconfirm,
  Table,
  Input,
  Card,
  Segmented,
  Collapse,
  Space,
  Checkbox,
} from "antd";
import { useSelector, useDispatch } from "react-redux";

import { handleSubmit, removeTodo } from "../Redux/Actions/Actions";

export default function User() {
  const dispatch = useDispatch();

  const { toDoList } = useSelector((state) => state);

  return (
    <div>
      <Col span={24}>
        <Row>
          <Col offset={1} span={8}>
            <Card
              style={{ textAlign: "left", backgroundColor: "#d7aefb" }}
              //   #cbf0f8 , #fdcfe8 , #d7aefb
              bodyStyle={{ textAlign: "left" }}
              title="User.js"
            >
              {toDoList.length > 0 ? (
                toDoList.map((v) => (
                  <li onClick={() => dispatch(removeTodo(v))}>{v}</li>
                ))
              ) : (
                <h3>Empty</h3>
              )}
            </Card>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

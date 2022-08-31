import React, { useEffect, useState } from "react";
import moment from "moment";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
import {
  Card,
  Heading,
  TextContainer,
  DisplayText,
  TextStyle,
  Button,
} from "@shopify/polaris";
import { Line } from "react-chartjs-2";

export function PurchaseGraph({ purchaseGraphData }) {
  return (
    <div>
      <Line
        data={purchaseGraphData}
        options={{
          title: {
            display: false,
            text: "Purchase Data",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />{" "}
    </div>
  );
}

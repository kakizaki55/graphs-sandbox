import React, { useEffect} from 'react'

import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

//chart type
import * as am5percent from "@amcharts/amcharts5/percent";

const RobotAmCharts = () =>  {
  //const chart = useRef(null);
  const chartID = "pie-two"
  console.log({ chartID });

  useEffect(() => {
    var root = am5.Root.new(chartID);


    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270
      })
    );

    series.states.create("hidden", {
      endAngle: -90
    });

    let data = [
      {
        category: "Lithuania",
        value: 501.9
      },
      {
        category: "Czechia",
        value: 301.9
      },
      {
        category: "Ireland",
        value: 201.1
      },
      {
        category: "Germany",
        value: 165.8
      },
      {
        category: "Australia",
        value: 139.9
      },
      {
        category: "Austria",
        value: 128.3
      },
      {
        category: "UK",
        value: 99
      }
    ];
    series.data.setAll(data);
    series.appear(1000, 100);

    return () => series._clearDirty()
  }, [chartID]);

  return (
    <div id={chartID}></div>
  )
}


export default RobotAmCharts;

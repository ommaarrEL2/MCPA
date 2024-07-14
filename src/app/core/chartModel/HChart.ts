import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import HC_timeLine from 'highcharts/modules/timeline';
import Drilldown from 'highcharts/modules/drilldown';
import colorAxis from 'highcharts/modules/coloraxis';
import HighchartsBullet from 'highcharts/modules/bullet';
HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);
HC_timeLine(Highcharts);
Drilldown(Highcharts);
colorAxis(Highcharts);
HighchartsBullet(Highcharts);

const obj = {
  circleBarValueColor: '#6a94c6',
  circleBarBgColor: '#def',
  primary: '#6571ff',
  secondary: '#7987a1',
  success: '#05a34a',
  info: '#66d1d1',
  warning: '#fbbc06',
  danger: '#ff3366',
  light: '#e9ecef',
  dark: '#060c17',
  muted: '#7987a1',
  gridBorder: 'rgba(77, 138, 240, .15)',
  bodyColor: '#000',
  cardBg: '#fff',
  fontFamily: "'Roboto', Helvetica, sans-serif",
};

export function GaugeChartChartModel(
  id: any,
  data: any,
  machineRatedSpeed: any,
  text: any
) {
  Highcharts.chart(id, {
    chart: {
      type: 'gauge',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height: '80%',
    },

    title: {
      text: text,
    },

    pane: {
      startAngle: -90,
      endAngle: 89.9,
      background: null,
      center: ['50%', '75%'],
      size: '110%',
    },
    yAxis: {
      min: 0,
      max: 200,
      tickPixelInterval: 72,
      tickPosition: 'inside',
      tickLength: 20,
      tickWidth: 2,
      minorTickInterval: null,
      labels: {
        distance: 20,
        style: {
          fontSize: '14px',
        },
      },
      plotBands: [
        {
          from: 0,
          to: 120,
          color: '#55BF3B', // green
          thickness: 20,
        },
        {
          from: 120,
          to: 160,
          color: '#DDDF0D', // yellow
          thickness: 20,
        },
        {
          from: 160,
          to: 200,
          color: '#DF5353', // red
          thickness: 20,
        },
      ],
    },

    series: [
      {
        name: 'Speed',
        data: [data ? data : 0],
        tooltip: {
          valueSuffix: ' km/h',
        },
        dataLabels: {
          format: '{y} km/h',
          borderWidth: 0,
          color:
            (Highcharts.defaultOptions.title &&
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            '#333333',
          style: {
            fontSize: '16px',
          },
        },
        dial: {
          radius: '80%',
          backgroundColor: 'gray',
          baseWidth: 12,
          baseLength: '0%',
          rearLength: '0%',
        },
        pivot: {
          backgroundColor: 'gray',
          radius: 6,
        },
      },
    ],
  } as any);
}

export function createGuageChart(
  id: any,
  series: any = 0,
  max: any = 0,
  dataLabels: string
): void {
  Highcharts.chart({
    chart: {
      type: 'solidgauge',
      animations: {
        enabled: false,
      },
      renderTo: id,
      defaultSeriesType: 'solidgauge',
      events: {
        load: true,
      },
    },

    title: null,

    pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: '#EEE',
        innerRadius: '10%',
        outerRadius: '100%',
        shape: 'arc',
      },
    },

    exporting: {
      enabled: false,
    },

    tooltip: {
      enabled: false,
    },

    // the value axis
    yAxis: {
      min: 0,
      max: max,
      stops: [
        [0.1, obj.success], // green
        [20000, obj.success], // yellow
        [40000, obj.success], // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickPositions: [0, max],
      title: {
        y: -70,
      },
      labels: {
        y: 16,
      },
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    series: [
      {
        name: 'Speed',
        data: [series],
        dataLabels: {
          format:
            '<div style="text-align:center">' +
            '<span style="font-size:25px">{y}</span><br/>' +
            `<span style="font-size:12px;opacity:0.4">${dataLabels}</span>` +
            '</div>',
        },
        tooltip: {
          valueSuffix: 'BPH',
        },
        credits: {
          enabled: false,
        },
      },
    ],
  } as any);
}

export function AreaChartChartModel(
  id: any,
  categories: any,
  data: any,
  name: any,
  title: any
) {
  Highcharts.chart(id, {
    chart: {
      type: 'area',
      zoomType: 'x',
    },
    // accessibility: {
    // description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
    // },
    title: {
      text: title,
    },

    subtitle: {
      text:
        'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
        'target="_blank">FAS</a>',
    },
    xAxis: {
      allowDecimals: false,
      categories: categories,

      // labels: {
      //     formatter: function () {
      //         return this.value; // clean, unformatted number for year
      //     }
      // },
      // accessibility: {
      //     rangeDescription: 'Range: 1940 to 2017.'
      // }
    },
    yAxis: {
      // title: {
      //     text: 'Nuclear weapon states'
      // },
      // labels: {
      //     formatter: function () {
      //         return this.value / 1000 + 'k';
      //     }
      // }
    },
    // colorAxis: {
    //   min: 0,
    //   stops: [[0, '#005AA8']]
    // },
    tooltip: {
      pointFormat:
        '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}',
    },
    plotOptions: {
      area: {
        area: {
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
    },
    series: [
      {
        name: name,
        data: data,
        color: obj.primary,
        animation: false,
      },
    ],
  } as any);
}

export function scrollablePlotAreaChartModel(data: any) {
  Highcharts.chart('container', {
    chart: {
      scrollablePlotArea: {
        minWidth: 700,
      },
    },

    title: {
      text: 'Daily sessions at www.highcharts.com',
    },

    subtitle: {
      text: 'Source: Google Analytics',
    },

    xAxis: {
      tickInterval: 7 * 24 * 3600 * 1000, // one week
      tickWidth: 0,
      gridLineWidth: 1,
      labels: {
        align: 'left',
        x: 3,
        y: -3,
      },
    },

    yAxis: [
      {
        // left y axis
        title: {
          text: null,
        },
        labels: {
          align: 'left',
          x: 3,
          y: 16,
          format: '{value:.,0f}',
        },
        showFirstLabel: false,
      },
      {
        // right y axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
          text: null,
        },
        labels: {
          align: 'right',
          x: -3,
          y: 16,
          format: '{value:.,0f}',
        },
        showFirstLabel: false,
      },
    ],

    legend: {
      align: 'left',
      verticalAlign: 'top',
      borderWidth: 0,
    },

    tooltip: {
      shared: true,
      crosshairs: true,
    },

    plotOptions: {
      series: {
        cursor: 'pointer',
        className: 'popup-on-click',
        marker: {
          lineWidth: 1,
        },
      },
    },

    series: [
      {
        name: 'All sessions',
        lineWidth: 4,
        data: data,
        marker: {
          radius: 4,
        },
      },
      {
        name: 'New users',
      },
    ],
  } as any);
}

export function DrillDownChartModel(id: any) {
  Highcharts.chart(id, {
    chart: {
      type: 'column',
    },
    title: {
      align: 'left',
      text: 'Browser market shares. January, 2022',
    },
    subtitle: {
      align: 'left',
      text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Total percent market share',
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },

    series: [
      {
        name: 'Browsers',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 63.06,
            drilldown: 'Chrome',
          },
          {
            name: 'Safari',
            y: 19.84,
            drilldown: 'Safari',
          },
          {
            name: 'Firefox',
            y: 4.18,
            drilldown: 'Firefox',
          },
          {
            name: 'Edge',
            y: 4.12,
            drilldown: 'Edge',
          },
          {
            name: 'Opera',
            y: 2.33,
            drilldown: 'Opera',
          },
          {
            name: 'Internet Explorer',
            y: 0.45,
            drilldown: 'Internet Explorer',
          },
          {
            name: 'Other',
            y: 1.582,
            drilldown: null,
          },
        ],
        color: obj.primary,
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: 'right',
        },
      },
      series: [
        {
          name: 'Chrome',
          id: 'Chrome',
          data: [
            ['v65.0', 0.1],
            ['v64.0', 1.3],
            ['v63.0', 53.02],
            ['v62.0', 1.4],
            ['v61.0', 0.88],
            ['v60.0', 0.56],
            ['v59.0', 0.45],
            ['v58.0', 0.49],
            ['v57.0', 0.32],
            ['v56.0', 0.29],
            ['v55.0', 0.79],
            ['v54.0', 0.18],
            ['v51.0', 0.13],
            ['v49.0', 2.16],
            ['v48.0', 0.13],
            ['v47.0', 0.11],
            ['v43.0', 0.17],
            ['v29.0', 0.26],
          ],
        },
        {
          name: 'Firefox',
          id: 'Firefox',
          data: [
            ['v58.0', 1.02],
            ['v57.0', 7.36],
            ['v56.0', 0.35],
            ['v55.0', 0.11],
            ['v54.0', 0.1],
            ['v52.0', 0.95],
            ['v51.0', 0.15],
            ['v50.0', 0.1],
            ['v48.0', 0.31],
            ['v47.0', 0.12],
          ],
        },
        {
          name: 'Internet Explorer',
          id: 'Internet Explorer',
          data: [
            ['v11.0', 6.2],
            ['v10.0', 0.29],
            ['v9.0', 0.27],
            ['v8.0', 0.47],
          ],
        },
        {
          name: 'Safari',
          id: 'Safari',
          data: [
            ['v11.0', 3.39],
            ['v10.1', 0.96],
            ['v10.0', 0.36],
            ['v9.1', 0.54],
            ['v9.0', 0.13],
            ['v5.1', 0.2],
          ],
        },
        {
          name: 'Edge',
          id: 'Edge',
          data: [
            ['v16', 2.6],
            ['v15', 0.92],
            ['v14', 0.4],
            ['v13', 0.1],
          ],
        },
        {
          name: 'Opera',
          id: 'Opera',
          data: [
            ['v50.0', 0.96],
            ['v49.0', 0.82],
            ['v12.1', 0.14],
          ],
        },
      ],
    },
  } as any);
}

export function spiderwebChartModel(id: any) {
  Highcharts.chart(id, {
    chart: {
      polar: true,
      type: 'line',
    },

    accessibility: {
      description:
        'A spiderweb chart compares the allocated budget against actual spending within an organization. The spider chart has six spokes. Each spoke represents one of the 6 departments within the organization: sales, marketing, development, customer support, information technology and administration. The chart is interactive, and each data point is displayed upon hovering. The chart clearly shows that 4 of the 6 departments have overspent their budget with Marketing responsible for the greatest overspend of $20,000. The allocated budget and actual spending data points for each department are as follows: Sales. Budget equals $43,000; spending equals $50,000. Marketing. Budget equals $19,000; spending equals $39,000. Development. Budget equals $60,000; spending equals $42,000. Customer support. Budget equals $35,000; spending equals $31,000. Information technology. Budget equals $17,000; spending equals $26,000. Administration. Budget equals $10,000; spending equals $14,000.',
    },

    title: {
      text: 'Budget vs spending',
      x: -80,
    },

    pane: {
      size: '80%',
    },

    xAxis: {
      categories: [
        'Sales',
        'Marketing',
        'Development',
        'Customer Support',
        'Information Technology',
        'Administration',
      ],
      tickmarkPlacement: 'on',
      lineWidth: 0,
    },

    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
    },

    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>',
    },

    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
    },

    series: [
      {
        name: 'Allocated Budget',
        data: [43000, 19000, 60000, 35000, 17000, 10000],
        pointPlacement: 'on',
        color: obj.primary,
      },
      {
        name: 'Actual Spending',
        data: [50000, 39000, 42000, 31000, 26000, 14000],
        pointPlacement: 'on',
        color: obj.success,
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal',
            },
            pane: {
              size: '70%',
            },
          },
        },
      ],
    },
  } as any);
}

export function columnChartModel(id: any) {
  Highcharts.chart(id, {
    chart: {
      type: 'column',
    },
    title: {
      text: "World's largest cities per 2021",
    },
    subtitle: {
      text: 'Source: <a href="https://worldpopulationreview.com/world-cities" target="_blank">World Population Review</a>',
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population (millions)',
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>',
    },
    series: [
      {
        name: 'Population',
        color: obj.primary,
        data: [
          ['Tokyo', 37.33],
          ['Delhi', 31.18],
          ['Shanghai', 27.79],
          ['Sao Paulo', 22.23],
          ['Mexico City', 21.91],
          ['Dhaka', 21.74],
          ['Cairo', 21.32],
          ['Beijing', 20.89],
          ['Mumbai', 20.67],
          ['Osaka', 19.11],
          ['Karachi', 16.45],
          ['Chongqing', 16.38],
          ['Istanbul', 15.41],
          ['Buenos Aires', 15.25],
          ['Kolkata', 14.974],
          ['Kinshasa', 14.97],
          ['Lagos', 14.86],
          ['Manila', 14.16],
          ['Tianjin', 13.79],
          ['Guangzhou', 13.64],
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif',
          },
        },
      },
    ],
  } as any);
}

export function DrilDownChartModelRefactor(
  id: any,
  Name: any,
  factory: any,
  line: any
) {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ',',
    },
  });

  Highcharts.chart(id, {
    chart: {
      type: 'column',
    },

    title: {
      align: 'left',
      text: `${Name} Production`,
    },

    events: {
      click: (e: any) => {
        console.log(e);
        e.point.color = 'rgb(228 106 106)';
      },
    },

    subtitle: {
      align: 'left',
      text: 'Click the columns to view more details',
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },

    xAxis: {
      type: 'category',
    },

    yAxis: {
      title: {
        text: `Total ${Name} Production`,
      },
    },

    legend: {
      enabled: false,
    },

    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:,.0f}',
        },
      },
    },

    tooltip: {
      headerFormat: ' <span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name }</span><b>{point.y}</b><br/>',
    },

    series: [
      {
        name: Name,
        colorByPoint: true,
        data: factory,
        events: {
          click: (e: any) => {},
        },
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: 'right',
        },
      },
      series: line,
    },
  } as any);
}

export function createChartspeed(chartId: any, data: any, type: any): void {
  Highcharts.chart(chartId, {
    chart: {
      zoomType: 'x',
      type: type,
      renderTo: chartId,
    },
    title: {
      text: '',
    },
    xAxis: {
      allowDecimals: false,
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: 'Machine State Charts',
      },
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}',
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
      area: {
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: [
      {
        name: 'State',
        data: data,
      },
    ],
  } as any);
}

export function piechartModel(chartId: any, data: any): void {
  Highcharts.chart(chartId, {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      renderTo: chartId,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: 'Browser market shares in May, 2020',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        data: data,
      },
    ],
  } as any);
}

export function ActualcreatelineChart(
  Actual: any,
  planed: any,
  type: any,
  id: any,
  text: any
): void {
  Highcharts.chart(id, {
    chart: {
      renderTo: id,
      inverted: true,
      marginLeft: 50,
      type: type,
      animations: {
        enabled: false,
      },
    },
    title: {
      text: text,
    },
    legend: {
      enabled: false,
    },

    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: obj.primary,
        targetOptions: {
          width: '200%',
        },
      },
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    yAxis: {
      animations: {
        enabled: false,
      },
      plotBands: [
        {
          from: 0,
          to: 50000,
          color: obj.success,
        },
      ],
      //   {
      //       from: 5000,
      //       to: 8000,
      //       color: this.obj.warning
      //   }, {
      //       from: 8000,
      //       to: planed,
      //       color: this.obj.success
      //   }
      // ],
      title: null,
    },
    series: [
      {
        animations: {
          enabled: false,
        },
        data: [
          {
            y: Actual,
            target: planed,
          },
        ],
      },
    ],
    tooltip: {
      pointFormat: '<b> Actual {point.y} </b> (with planed at {point.target})',
    },
  } as any);
}

export function createlineChart(
  data: any,
  type: any,
  id: any,
  text: any
): void {
  Highcharts.chart(id, {
    chart: {
      renderTo: id,
      height: '210px',
      animations: {
        enabled: false,
      },
      type: type,
    },
    title: {
      text: text,
    },
    subtitle: {
      text: '',
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: 'Packets : <b>{point.y:.1f}</b>',
    },
    plotOptions: {
      series: {
        animation: false,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
        },
      },
    },
    series: [
      {
        name: 'Population',
        data: data,
        color: obj.primary,
        dataLabels: {
          enabled: true,
          //rotation: -90,
          color: '#000',
          align: 'top',
          format: '{point.y:.1f}', // one decimal
          y: -5, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif',
          },
        },
      },
    ],
  } as any);
}

export function barChart(id: any, titleText: any, planned: any, actual: any) {
  Highcharts.chart(id, {
    chart: {
      renderTo: id,
      animations: {
        enabled: false,
      },
      type: 'bar',
    },
    title: {
      text: titleText,
      align: 'left',
    },
    subtitle: {
      text: '',
      align: 'left',
    },
    xAxis: {
      categories: [],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
        align: 'high',
      },
      labels: {
        overflow: 'justify',
      },
    },
    tooltip: {
      valueSuffix: '',
    },
    plotOptions: {
      animation: false,
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
      column: {
        pointWidth: 10,
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 20,
      floating: true,
      borderWidth: 0,
      backgroundColor:
        Highcharts.defaultOptions.legend?.backgroundColor || '#FFFFFF',
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'planned',
        data: [planned],
      },
      {
        name: 'actual',
        data: [actual],
      },
    ],
  } as any);
}

export function guageChartRefactor({ ...data }) {
  Highcharts.chart(data['id'], {
    chart: {
      type: 'solidgauge',
      height: data['height'] ? data['height'] : '250px',
    },
    title: null,
    pane: {
      center: ['50%', '85%'],
      size: '100%',
      startAngle: -90,

      endAngle: 90,
      background: {
        backgroundColor: '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc',
      },
    },

    exporting: {
      enabled: false,
    },

    tooltip: {
      enabled: false,
    },

    // the value axis
    yAxis: {
      allowDecimals: true,
      min: 0,
      max: data['max'] ? data['max'] : 200,
      stops: [
        [0.1, '#DF5353'], // red
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#55BF3B'], // green
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickPositions: [0, data['max'] ? data['max'] : 200],
      title: {
        y: -70,
      },
      labels: {
        y: 16,
      },
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        name: 'Speed',
        valueDecimals: 2,
        data: [data['series'] ? data['series'] : 0],
        dataLabels: {
          enabled: true,
          format:
            '<div style="text-align:center">' +
            `<span style="font-size:25px">{y}</span><br/>` +
            `<span style="font-size:12px;opacity:0.4">${data['dataLabels']}</span>` +
            '</div>',
        },
      },
    ],
  } as any);
}

export function createLineChart({ ...data }) {
  Highcharts.chart(data['id'], {
    chart: {
      zoomType: 'x',
      renderTo: data['id'],
      type: data['type'],
    },
    title: {
      text: '',
      align: 'left',
    },
    subtitle: {
      text: '',
      align: 'left',
    },
    yAxis: {
      title: {
        text: `Machine ${data['yAxistext']} Charts`,
      },
    },
    xAxis: {
      allowDecimals: false,
      type: 'datetime',
      categories: data['xAxisCategories'],
      //   [
      // '/22/2023, 2:04:00 AM', '5/22/2023, 2:09:00 AM', '5/22/2023, 2:14:00 AM', '5/22/2023, 2:19:00 AM'
      //   ]
    },
    tooltip: {
      shared: true,
      headerFormat: '<b>{series.name} {point.x}</b><br>',
    },
    legend: {
      layout: 'vertical',
      align: 'center',
      verticalAlign: 'top',
      y: 0,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },
    series: [
      {
        name: data['seriesname'],
        data: data['series'],
        //[43934, 48656, 65165, 81827]
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  } as any);
}

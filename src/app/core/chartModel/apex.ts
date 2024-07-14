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
  transparent: 'transparent',
};

export function radialBarChartFunc({ ...data }) {
  return {
    series: [data['series']],
    chart: {
      height: data['height'] ? data['height'] : 260,
      type: 'radialBar',
      width: data['height'] ? `${data['height'] - 60}px` : '200px',
    },
    colors: [data['color'] ? data['color'] : obj.circleBarValueColor],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '60%',
        },
        track: {
          show: true,
          background: obj.circleBarBgColor,
          strokeWidth: '100%',
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
          showOn: 'always',
          name: {
            //offsetY: -11,
            show: true,
            color: data['color'] ? data['color'] : obj.circleBarValueColor,
            fontSize: '13px',
          },
          value: {
            color: data['color'] ? data['color'] : obj.circleBarValueColor,
            fontSize: data['fontSize'] ? data['fontSize'] : '30px',
            fontWeight: 700,
            show: true,
            formatter: function (value: any) {
              return value + data['symbole'];
            },
          },
        },
      },
    },
    fill: {
      type: 'solid',
      opacity: 1,
      colors: [data['color'] ? data['color'] : obj.circleBarValueColor],
    },
    stroke: {
      lineCap: 'round',
      colors: [data['color'] ? data['color'] : obj.circleBarValueColor],
    },
    labels: [data['name']],
  };
}

export function getBarChartOptions(data: any) {
  return {
    series: [
      {
        data: data,
      },
    ],
    chart: {
      type: 'rangeBar',
      height: '320',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      textAnchor: 'middle',

      enabled: true,
      style: {
        colors: ['#000'],
      },
    },
    legend: {
      fontWeight: 900,
    },

    xaxis: {
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,

        style: {
          colors: [],
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 900,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [],
          fontSize: '13px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-yaxis-label',
        },
      },
    },
  };
}

export function TimelineChartModel({ ...data }) {
  return {
    series: data['series'],
    chart: {
      height: 150,
      type: 'rangeBar',
      animations: {
        enabled: false,
      },
      renderTo: data['id'],
    },

    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%',
        rangeBarGroupRows: true,
      },
    },
    colors: ['#000'],
    fill: {
      type: 'solid',
    },

    xaxis: {
      type: 'datetime',
      min: data['min'],
      max: data['max'],
    },
    legend: {
      position: 'right',
      show: false,
    },
    dataLabels: {
      enabled: false,
      colors: obj.primary,
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy, h:mm:ss TT',
      },
    },
    // tooltip: {
    //   x: {
    //     formatter: function(value:any) {
    //       return `
    //       <span class="fw-bolder text-primary">Day</span>
    //       ${new Date(value)}
    //       <span class="fw-bolder text-danger">Time</span>
    //       ${new Date(value-(new Date().getTimezoneOffset()*-60*1000)).toLocaleTimeString()}
    //       `
    //     }
    //   }
    // }
  };
}

export function TimelineChartModel1({ ...data }) {
  return {
    series: data['series'],
    chart: {
      height: 150,
      type: 'rangeBar',
      animations: {
        enabled: false,
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%',
        rangeBarGroupRows: true,
      },
    },
    colors: ['#000'],
    fill: {
      type: 'solid',
    },

    xaxis: {
      type: 'datetime',
      min: data['min'],
      max: data['max'],
    },
    legend: {
      position: 'right',
      show: false,
    },
    dataLabels: {
      enabled: false,
      colors: obj.primary,
    },
    tooltip: {
      x: {
        formatter: function (value: any) {
          return `
          <span class="fw-bolder text-primary">Day</span>
          ${new Date(value).getUTCDate()}/${
            new Date(value).getUTCMonth() + 1
          }/${new Date(value).getUTCFullYear()}
          <span class="fw-bolder text-danger">Time</span>
          ${new Date(
            value - new Date().getTimezoneOffset() * -60 * 1000
          ).toLocaleTimeString()}
          `;
        },
      },
    },
  };
}

export function ConsumptionChartOptions(
  energySeries: any,
  energyTimeSeries: any
) {
  return {
    series: [
      {
        name: '',
        data: energySeries,
      },
    ],
    chart: {
      type: 'bar',
      height: 60,
      sparkline: {
        enabled: !0,
      },
    },
    colors: [obj.primary],
    xaxis: {
      type: 'datetime',
      categories: energyTimeSeries,
    },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    tooltip: {
      x: {
        formatter: function (value: any) {
          return new Date(value).toLocaleDateString(); // The formatter function overrides format property
        },
      },
      y: {
        formatter: function (value: any) {
          return value
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
        },
      },
    },
  };
}

export function getRadarChartOptions(sleSeries: any = [], timeSeries: any) {
  return {
    series: [
      {
        name: 'SLE',
        data: sleSeries,
      },
    ],
    chart: {
      height: 350,
      type: 'radar',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false,
      },
    },
    colors: [obj.primary, obj.warning, obj.danger],
    grid: {
      padding: {
        bottom: -6,
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center',
      fontFamily: obj.fontFamily,
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
    },
    // labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
    stroke: {
      width: 1,
    },
    fill: {
      opacity: 0.75,
    },
    xaxis: {
      categories: timeSeries,
      labels: {
        show: true,
        style: {
          colors: [
            obj.secondary,
            obj.secondary,
            obj.secondary,
            obj.secondary,
            obj.secondary,
            obj.secondary,
          ],
          fontSize: '11px',
          fontFamily: obj.fontFamily,
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
        style: {
          colors: obj.transparent,
          fontSize: '11px',
          fontFamily: obj.fontFamily,
        },
      },
    },
    markers: {
      size: 5,
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: obj.gridBorder,
          strokeWidth: 5,
          connectorColors: obj.gridBorder,
          fill: {
            colors: obj.secondary,
          },
        },
      },
    },
  };
}

export function LineChartRepo({ ...data }) {
  return {
    series: data['series']
      ? data['series']
      : [
          {
            name: 'phase1',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          },
          {
            name: 'phase2',
            data: [10, 41, 35, 14, 56, 62, 85, 91, 148],
          },
          {
            name: 'phase3',
            data: [10, 41, 35, 99, 11, 58, 45, 58, 200],
          },
        ],
    colors: [
      '#E62E2B',
      '#000000',
      '#69c18a',
      '#f4a261',
      '#e76f51',
      '#023e8a',
      '#d62828',
      '#ffadad',
      '#6b705c',
    ],
    chart: {
      height: data['height'] ? data['height'] : 350,
      type: 'line',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: data['categories']
        ? data['categories']
        : [
            '2023-11-27T08:03:55.1629057',
            '2023-11-27T09:03:55.1629057',
            '2023-11-27T10:03:55.1629057',
            '2023-11-27T11:03:55.1629057',
            '2023-11-27T12:03:55.1629057',
            '2023-11-27T13:03:55.1629057',
            '2023-11-27T14:03:55.1629057',
            '2023-11-27T15:03:55.1629057',
            '2023-11-27T16:03:55.1629057',
          ],
    },
    yaxis: {
      title: {
        text: data['yAXIS'] ? data['yAXIS'] : 'kwh',
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm:ss',
      },
      y: {
        formatter: data['yFormatter']
          ? data['yFormatter']
          : function (val: any) {
              return val + (data['label'] ? data['label'] : ' KWH');
            },
      },
    },
  };
}

export function barolumsChartrepo({ ...data }) {
  return {
    series: data['series']
      ? data['series']
      : [
          {
            name: 'Phase1',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: 'Phase2',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          },
          {
            name: 'Phase3',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
          },
        ],
    chart: {
      type: 'bar',
      height: 350,
    },
    colors: [
      '#E62E2B',
      '#000000',
      '#69c18a',
      '#f4a261',
      '#e76f51',
      '#023e8a',
      '#d62828',
      '#ffadad',
      '#6b705c',
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: data['categories']
        ? data['categories']
        : ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      style: {
        background: '#f3f3f3',
      },

      y: {
        formatter: function (val: string) {
          return '$ ' + val + ' thousands';
        },
      },
    },
  };
}

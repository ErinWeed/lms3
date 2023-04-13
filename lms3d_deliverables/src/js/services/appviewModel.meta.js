import zoneData from './zone_data.js';

let appViewModel = {
  data: zoneData,
  header: {
    logo: './images/flower3.svg',
    title: 'Garden Zones',
    text: "Although they're still covered with a soft blanket of snow, preparations for planting have already begun.",
  },
  list: {
    entity: 'zones',
    entitySingle: 'zone',
    listTitle: 'Garden Zones',
    tableClasses: 'table table-striped table-bordered text-center bg-light',
    thClasses: 'table-header',
  },
};

export default appViewModel;

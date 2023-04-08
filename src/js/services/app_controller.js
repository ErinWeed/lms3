import LocalStorageService from './local_storage_service.js'
import zoneData from './zone_data.js'
import ListView from './list_view.js'

export default class AppController {
  constructor() {
    this.storage = new LocalStorageService(zoneData, 'zoneData')

    this.ListView = new ListView(this.storage, {
      listContainerId: 'table-container',
      modalContainerId: 'delete-modal',
      alertContainerId: 'alert-container',
      entitySingle: 'zone',
      resetBtnId: 'reset-button',
    })

    this.render()
  }
  async render() {
    await this.ListView.render()
  }
}

class TarjetaLedBlackTransparente extends HTMLElement {
  setConfig(config) {
    if (!config.entity) {
      throw new Error("Falta 'entity' en la configuración");
    }
    this.config = config;
    this._helpers = null;
    this._card = null;
    this._createCard();
  }

  async _createCard() {
    if (!this._helpers) {
      this._helpers = await window.loadCardHelpers();
    }

    const defaultConfig = {
      type: "custom:mushroom-light-card",
      icon: "mdi:led-strip-variant",
      layout: "horizontal",
      fill_container: true,
      primary_info: "name",
      secondary_info: "state",
      icon_type: "icon",
      use_light_color: true,
      show_brightness_control: true,
      show_color_temp_control: true,
      show_color_control: true,
      collapsible_controls: true,
      card_mod: {
        style: `
          :host {
            --primary-text-color: black !important;
            --secondary-text-color: black !important;
            --text-primary-color: black !important;
            --text-secondary-color: black !important;
            --icon-color: black !important;
            --icon-color-disabled: black !important;
            --mushroom-text-color: black !important;
            --mushroom-info-color: black !important;
            color: black !important;
          }

          ha-card {
            background: transparent !important;
            border: 1px solid rgba(0,0,0,0.7) !important;
            border-radius: 1rem !important;
            box-shadow: none !important;
            padding: 0.5rem 1rem !important;
          }
        `
      }
    };

    const mergedConfig = Object.assign({}, defaultConfig, this.config);

    this._card = this._helpers.createCardElement(mergedConfig);
    this._card.hass = this.hass;
    this.innerHTML = "";
    this.appendChild(this._card);
  }

  set hass(hass) {
    this._hass = hass;
    if (this._card) this._card.hass = hass;
  }

  getCardSize() {
    return this._card && this._card.getCardSize ? this._card.getCardSize() : 1;
  }
}

/* 🔹 Registro del componente */
customElements.define("tarjeta-led-black-transparente", TarjetaLedBlackTransparente);

/* 🔹 Métodos para que aparezca en el selector de tarjetas */
TarjetaLedBlackTransparente.getStubConfig = () => {
  return {
    type: "custom:tarjeta-led-black-transparente",
    entity: "light.example"
  };
};

TarjetaLedBlackTransparente.getConfigElement = () => {
  const el = document.createElement("hui-generic-entity-row");
  el.config = { entity: "light.example" };
  return el;
};

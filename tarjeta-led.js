class TarjetaLed extends HTMLElement {
  setConfig(config) {
    if (!config.entity) throw new Error("Falta 'entity' en la configuración");
    this.config = config;
  }

  set hass(hass) {
    if (!this._card) {
      const card = document.createElement("custom:mushroom-light-card");
      const merged = Object.assign(
        {
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
                border-radius: 1rem;
                box-shadow: none !important;
                padding: 0.5rem 1rem;
              }
            `,
          },
        },
        this.config
      );

      card.setConfig(merged);
      this._card = card;
      this.appendChild(card);
    }
    this._card.hass = hass;
  }

  getCardSize() {
    return 1;
  }
}

customElements.define("tarjeta-led", TarjetaLed);

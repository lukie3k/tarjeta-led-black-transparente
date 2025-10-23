# 💡 Tarjeta LED Negra transparente

[![HACS Default](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

Tarjeta personalizada para Home Assistant basada en **Mushroom Light Card**, con diseño **card-mod 3**:

- Fondo transparente  
- Texto y borde negro  
- Estilo elegante y minimalista  
- Totalmente interactiva con control de brillo, color y temperatura  

## 🧩 Instalación rápida (HACS)
1. Abre **HACS → Frontend → Repositorios personalizados**
2. Añade el repositorio:
https://github.com/lukie3k/tarjeta-led-black-transparente
3. Categoría: **Lovelace**
4. Instala y reinicia Home Assistant

## 💡 Uso en tu dashboard
```yaml
type: custom:tarjeta-led
entity: light.tu_luz

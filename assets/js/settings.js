class BoxSettings {
  constructor(
    horizontalOffsetValue,
    verticalOffsetValue,
    blurValue,
    spreadValue,
    opactiyValue
  ) {
    this.horizontalOffsetValue = horizontalOffsetValue;
    this.verticalOffsetValue = verticalOffsetValue;
    this.blurValue = blurValue;
    this.spreadValue = spreadValue;
    this.opactiyValue = opactiyValue;
  }

  // Change box settings
  changeSettings = (box) => {
    box.style.boxShadow = `${this.horizontalOffsetValue} ${this.verticalOffsetValue} ${this.blurValue} ${this.spreadValue} rgba(0, 0, 0, ${this.opactiyValue})`;
  };

  // Get box's current settings
  getSettings = () => {
    return {
      horizontalOffset: `${this.horizontalOffsetValue}`,
      verticalOffset: `${this.verticalOffsetValue}`,
      blur: `${this.blurValue}`,
      spread: `${this.spreadValue}`,
      opactiy: `${this.opactiyValue}`,
    };
  };
}

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
    box.style.boxShadow = `${this.horizontalOffsetValue}px ${this.verticalOffsetValue}px ${this.blurValue}px ${this.spreadValue}px rgba(0, 0, 0, ${this.opactiyValue})`;
  };

  // Get box's current settings
  getSettings = (box) => {
    return `${box.style.boxShadow}`;
  };
}

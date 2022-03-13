import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var WheelSelector = /** @class */ (function (_super) {
    __extends(WheelSelector, _super);
    function WheelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WheelSelector.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    WheelSelector.prototype.hideSelector = function () { return cordova(this, "hideSelector", { "platforms": ["iOS"] }, arguments); };
    WheelSelector.pluginName = "WheelSelector";
    WheelSelector.plugin = "cordova-wheel-selector-plugin";
    WheelSelector.pluginRef = "SelectorCordovaPlugin";
    WheelSelector.repo = "https://github.com/jasonmamy/cordova-wheel-selector-plugin";
    WheelSelector.platforms = ["Android", "iOS"];
    WheelSelector.decorators = [
        { type: Injectable }
    ];
    return WheelSelector;
}(AwesomeCordovaNativePlugin));
export { WheelSelector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2hlZWwtc2VsZWN0b3Ivbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBbUx6RCxpQ0FBMEI7Ozs7SUFRM0QsNEJBQUksYUFBQyxPQUE2QjtJQVlsQyxvQ0FBWTs7Ozs7OztnQkFyQmIsVUFBVTs7d0JBbkxYO0VBb0xtQywwQkFBMEI7U0FBaEQsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2hlZWxTZWxlY3Rvckl0ZW0ge1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0SXRlbSB7XG4gIGluZGV4OiBudW1iZXI7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2hlZWxTZWxlY3Rvck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIHRpdGxlIG9mIHRoZSBzZWxlY3RvcidzIGlucHV0IGJveFxuICAgKi9cbiAgdGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGl0ZW1zIHRvIGRpc3BsYXkgKGFycmF5IG9mIGl0ZW1zKS5cbiAgICovXG4gIGl0ZW1zOiBXaGVlbFNlbGVjdG9ySXRlbVtdW107XG5cbiAgLyoqXG4gICAqIFdoaWNoIGl0ZW1zIHRvIGRpc3BsYXkgYnkgZGVmYXVsdC5cbiAgICovXG4gIGRlZmF1bHRJdGVtcz86IERlZmF1bHRJdGVtW107XG5cbiAgLyoqXG4gICAqIFRoZSAnb2snIGJ1dHRvbiB0ZXh0XG4gICAqIERlZmF1bHQ6IERvbmVcbiAgICovXG4gIHBvc2l0aXZlQnV0dG9uVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlICdjYW5jZWwnIGJ1dHRvbiB0ZXh0XG4gICAqIERlZmF1bHQ6IENhbmNlbFxuICAgKi9cbiAgbmVnYXRpdmVCdXR0b25UZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbmRyb2lkIG9ubHkgLSB0aGVtZSBjb2xvciwgJ2xpZ2h0JyBvciAnZGFyaycuXG4gICAqIERlZmF1bHQ6IGxpZ2h0XG4gICAqL1xuICB0aGVtZT86ICdsaWdodCcgfCAnZGFyayc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gaGF2ZSB0aGUgd2hlZWxzICd3cmFwJyAoQW5kcm9pZCBvbmx5KVxuICAgKiBEZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgd3JhcFdoZWVsVGV4dD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBqc29uIGtleSB0byBkaXNwbGF5LCBieSBkZWZhdWx0IGl0IGlzIGRlc2NyaXB0aW9uLCB0aGlzIGFsbG93cyBmb3Igc2V0dGluZyBhbnlcbiAgICoga2V5L3ZhbHVlIHRvIGJlIGRpc3BsYXllZFxuICAgKiBEZWZhdWx0OiBkZXNjcmlwdGlvblxuICAgKi9cbiAgZGlzcGxheUtleT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXaGVlbFNlbGVjdG9yRGF0YSB7XG4gIGRhdGE6IGFueTtcbn1cblxuLyoqXG4gKiBAYmV0YVxuICogQG5hbWUgV2hlZWxTZWxlY3RvciBQbHVnaW5cbiAqIEBkZXNjcmlwdGlvbiBOYXRpdmUgd2hlZWwgc2VsZWN0b3IgZm9yIENvcmRvdmEgKEFuZHJvaWQvaU9TKS5cbiAqIEB1c2FnZVxuICogYGBgXG4gKiBpbXBvcnQgeyBXaGVlbFNlbGVjdG9yIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3doZWVsLXNlbGVjdG9yL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VsZWN0b3I6IFdoZWVsU2VsZWN0b3IpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IGpzb25EYXRhID0ge1xuICogICBudW1iZXJzOiBbXG4gKiAgICB7IGRlc2NyaXB0aW9uOiBcIjFcIiB9LFxuICogICAgIHsgZGVzY3JpcHRpb246IFwiMlwiIH0sXG4gKiAgICAgeyBkZXNjcmlwdGlvbjogXCIzXCIgfVxuICogICBdLFxuICogICBmcnVpdHM6IFtcbiAqICAgICB7IGRlc2NyaXB0aW9uOiBcIkFwcGxlXCIgfSxcbiAqICAgICB7IGRlc2NyaXB0aW9uOiBcIkJhbmFuYVwiIH0sXG4gKiAgICAgeyBkZXNjcmlwdGlvbjogXCJUYW5nZXJpbmVcIiB9XG4gKiAgIF0sXG4gKiAgIGZpcnN0TmFtZXM6IFtcbiAqICAgICB7IG5hbWU6IFwiRnJlZFwiLCBpZDogJzEnIH0sXG4gKiAgICAgeyBuYW1lOiBcIkphbmVcIiwgaWQ6ICcyJyB9LFxuICogICAgIHsgbmFtZTogXCJCb2JcIiwgaWQ6ICczJyB9LFxuICogICAgIHsgbmFtZTogXCJFYXJsXCIsIGlkOiAnNCcgfSxcbiAqICAgICB7IG5hbWU6IFwiRXVuaWNlXCIsIGlkOiAnNScgfVxuICogICBdLFxuICogICBsYXN0TmFtZXM6IFtcbiAqICAgICB7IG5hbWU6IFwiSm9obnNvblwiLCBpZDogJzEwMCcgfSxcbiAqICAgICB7IG5hbWU6IFwiRG9lXCIsIGlkOiAnMTAxJyB9LFxuICogICAgIHsgbmFtZTogXCJLaW5pc2hpd2FcIiwgaWQ6ICcxMDInIH0sXG4gKiAgICAgeyBuYW1lOiBcIkdvcmRvblwiLCBpZDogJzEwMycgfSxcbiAqICAgICB7IG5hbWU6IFwiU21pdGhcIiwgaWQ6ICcxMDQnIH1cbiAqICAgXVxuICogfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIGJhc2ljIG51bWJlciBzZWxlY3Rpb24sIGluZGV4IGlzIGFsd2F5cyByZXR1cm5lZCBpbiB0aGUgcmVzdWx0XG4gKiAgc2VsZWN0QU51bWJlcigpIHtcbiAqICAgIHRoaXMuc2VsZWN0b3Iuc2hvdyh7XG4gKiAgICAgIHRpdGxlOiBcIkhvdyBNYW55P1wiLFxuICogICAgICBpdGVtczogW1xuICogICAgICAgIHRoaXMuanNvbkRhdGEubnVtYmVyc1xuICogICAgICBdLFxuICogICAgfSkudGhlbihcbiAqICAgICAgcmVzdWx0ID0+IHtcbiAqICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRbMF0uZGVzY3JpcHRpb24gKyAnIGF0IGluZGV4OiAnICsgcmVzdWx0WzBdLmluZGV4KTtcbiAqICAgICAgfSxcbiAqICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuICogICAgICApO1xuICogIH1cbiAqXG4gKiAgLi4uXG4gKlxuICogIC8vIGJhc2ljIHNlbGVjdGlvbiwgc2V0dGluZyBpbml0aWFsIGRpc3BsYXllZCBkZWZhdWx0IHZhbHVlczogJzMnICdCYW5hbmEnXG4gKiAgc2VsZWN0RnJ1aXQoKSB7XG4gKiAgICB0aGlzLnNlbGVjdG9yLnNob3coe1xuICogICAgICB0aXRsZTogXCJIb3cgTXVjaD9cIixcbiAqICAgICAgaXRlbXM6IFtcbiAqICAgICAgICB0aGlzLmpzb25EYXRhLm51bWJlcnMsIHRoaXMuanNvbkRhdGEuZnJ1aXRzXG4gKiAgICAgIF0sXG4gKiAgICAgIHBvc2l0aXZlQnV0dG9uVGV4dDogXCJPa1wiLFxuICogICAgICBuZWdhdGl2ZUJ1dHRvblRleHQ6IFwiTm9wZVwiLFxuICogICAgICBkZWZhdWx0SXRlbXM6IFtcbiAqICBcdCAge2luZGV4OjAsIHZhbHVlOiB0aGlzLmpzb25EYXRhLm51bWJlcnNbMl0uZGVzY3JpcHRpb259LFxuICogIFx0ICB7aW5kZXg6IDEsIHZhbHVlOiB0aGlzLmpzb25EYXRhLmZydWl0c1szXS5kZXNjcmlwdGlvbn1cbiAqICBcdF1cbiAqICAgIH0pLnRoZW4oXG4gKiAgICAgIHJlc3VsdCA9PiB7XG4gKiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0WzBdLmRlc2NyaXB0aW9uICsgJyAnICsgcmVzdWx0WzFdLmRlc2NyaXB0aW9uKTtcbiAqICAgICAgfSxcbiAqICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJyArIEpTT04uc3RyaW5naWZ5KGVycikpXG4gKiAgICAgICk7XG4gKiAgfVxuICpcbiAqICAuLi5cbiAqXG4gKiAgLy8gbW9yZSBjb21wbGV4IGFzIG92ZXJyaWRlcyB3aGljaCBrZXkgdG8gZGlzcGxheVxuICogIC8vIHRoZW4gcmV0cmlldmUgcHJvcGVydGllcyBmcm9tIG9yaWdpbmFsIGRhdGFcbiAqICBzZWxlY3ROYW1lc1VzaW5nRGlzcGxheUtleSgpIHtcbiAqICAgIHRoaXMuc2VsZWN0b3Iuc2hvdyh7XG4gKiAgICAgIHRpdGxlOiBcIldobz9cIixcbiAqICAgICAgaXRlbXM6IFtcbiAqICAgICAgICB0aGlzLmpzb25EYXRhLmZpcnN0TmFtZXMsIHRoaXMuanNvbkRhdGEubGFzdE5hbWVzXG4gKiAgICAgIF0sXG4gKiAgICAgIGRpc3BsYXlLZXk6ICduYW1lJyxcbiAqICAgICAgZGVmYXVsdEl0ZW1zOiBbXG4gKiAgXHQgIHtpbmRleDowLCB2YWx1ZTogdGhpcy5qc29uRGF0YS5maXJzdE5hbWVzWzJdLm5hbWV9LFxuICogICAgICAgIHtpbmRleDogMCwgdmFsdWU6IHRoaXMuanNvbkRhdGEubGFzdE5hbWVzWzNdLm5hbWV9XG4gKiAgICAgIF1cbiAqICAgIH0pLnRoZW4oXG4gKiAgICAgIHJlc3VsdCA9PiB7XG4gKiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0WzBdLm5hbWUgKyAnIChpZD0gJyArIHRoaXMuanNvbkRhdGEuZmlyc3ROYW1lc1tyZXN1bHRbMF0uaW5kZXhdLmlkICsgJyksICcgK1xuICogICAgICAgICAgcmVzdWx0WzFdLm5hbWUgKyAnIChpZD0nICsgdGhpcy5qc29uRGF0YS5sYXN0TmFtZXNbcmVzdWx0WzFdLmluZGV4XS5pZCArICcpJyk7XG4gKiAgICAgIH0sXG4gKiAgICAgIGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKVxuICogICAgICApO1xuICogIH1cbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBXaGVlbFNlbGVjdG9yT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1doZWVsU2VsZWN0b3InLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXdoZWVsLXNlbGVjdG9yLXBsdWdpbicsXG4gIHBsdWdpblJlZjogJ1NlbGVjdG9yQ29yZG92YVBsdWdpbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vamFzb25tYW15L2NvcmRvdmEtd2hlZWwtc2VsZWN0b3ItcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdoZWVsU2VsZWN0b3IgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaG93cyB0aGUgd2hlZWwgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtXaGVlbFNlbGVjdG9yT3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciB0aGUgd2hlZWwgc2VsZWN0b3JcbiAgICogQHJldHVybnMge1Byb21pc2U8V2hlZWxTZWxlY3RvckRhdGE+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHNlbGVjdGVkIGl0ZW1zLCBvciBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvdyhvcHRpb25zOiBXaGVlbFNlbGVjdG9yT3B0aW9ucyk6IFByb21pc2U8V2hlZWxTZWxlY3RvckRhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgc2VsZWN0b3JcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBoaWRlU2VsZWN0b3IoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=
export function component(...values:string[]):any {
    return (target:Function) => {
        const component:Function = (...args:any[]):Object => {
            return ((classConstructor:Function, args:any[], ctor:any):Object => {
                ctor.prototype = classConstructor.prototype;
                const child:Object = new ctor;
                const result:Object = classConstructor.apply(child, args);
                return typeof result === "object" ? result : child;
            })(target, args, () => {
                return null;
            });
        };
        component.$inject = values;
        return component;
    };
}
import * as dictionary from 'tailwindcss/colors';
export class MatTailwind {
    static translateToHex(tailwindClass: string): string {
        const params = tailwindClass.split('-');
        let color = '';
        let output = '';
        if (params.length >= 2) {
            color = params[1].trim();
            if ((color ===  'black') || (color === 'white')) {
                output = dictionary[color];
            } else {
                if(params.length >= 3){
                    const auxDict: any = dictionary;
                    output = auxDict[color][params[2]]
                }
            }
        }
        return output;
    }
}
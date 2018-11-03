export class Heap<T> {
    private array: T[];
    private count: number;

    constructor(size: number) {
        if ( size <= 0 ) {
            throw Error("cannot create an empty heap");
        }
        this.array = new Array<T>(size);
        this.count = 0;
    }

    public insert(data: T) {
        if ( this.array.length === this.count ) {
            throw Error( "heap full" );
        }
        this.array[this.count++] = data;
        let currIndex = this.count - 1;
        let nextIndex = Math.floor(( currIndex - 1 ) / 2 );
        while ( nextIndex >= 0 && this.array[currIndex] < this.array[nextIndex] ) {
            const toMove = this.array[currIndex] ;
            this.array[currIndex] = this.array[nextIndex];
            this.array[nextIndex] = toMove;
            currIndex = nextIndex;
            nextIndex = Math.floor(( currIndex - 1 ) / 2 ) ;
        }
    }

    public remove(data: T) {
        if ( this.count === 0) {
            throw Error("empty heap");
        }
        const currIndex = this.array.findIndex(
            ( element ) => element === data );
        if ( currIndex === -1 ) {
            throw Error( `Not found data ${data}` );
        }
        this.array[currIndex] = this.array[--this.count];
        this.reorderFrom( currIndex );
    }

    public top(): T {
        if ( this.count === 0 ) {
            throw Error("empty heap");
        }
        return this.array[0];
    }

    public takeTop(): T {
        if ( this.count === 0 ) {
            throw Error("empty heap");
        }
        const retVal = this.array[0];
        this.array[0] = this.array[--this.count];
        this.reorderFrom( 0 );
        return retVal;
    }

    public replaceTop(data: T) {
        if ( this.count === 0 ) {
            throw Error("empty heap");
        }
        this.array[0] = data;
        this.reorderFrom( 0 );
    }

    private reorderFrom( index: number ) {
        let currIndex = index ;
        while ( currIndex < this.count ) {
            const leftIndex = 2 * currIndex + 1;
            const rightIndex = 2 * currIndex + 2;

            let nextRootIndex = currIndex ;
            if ( leftIndex < this.count ) {
                if (this.array[nextRootIndex] > this.array[leftIndex]) {
                    nextRootIndex = leftIndex;
                }

                if (rightIndex < this.count && this.array[nextRootIndex] > this.array[rightIndex]) {
                    nextRootIndex = rightIndex;
                }
            }
            if ( nextRootIndex === currIndex ) {
                break;
            }
            const toMove = this.array[nextRootIndex];
            this.array[nextRootIndex] = this.array[currIndex];
            this.array[currIndex] = toMove;
            currIndex = nextRootIndex;
        }
    }
}

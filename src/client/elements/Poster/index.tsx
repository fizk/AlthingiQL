import React from 'react';
import classVariations from "../../utils/classVariations";
import './index.scss'

interface Props extends React.HTMLProps<HTMLImageElement> {
    variations?: string[];
    src: string;
    height: number;
    width: number;
}

export default class Poster extends React.Component<Props> {
    public static defaultProps = {
        width: 32,
        height: 32,
        src: undefined,
        variations: [],
    };

    private myRef = React.createRef<HTMLImageElement>();

    private observer: IntersectionObserver;

    private options = {
        rootMargin: '0px',
        threshold: 1.0
    };

    public constructor(props: Props) {
        super(props);
        this.observer = new IntersectionObserver(this.observerCallback, this.options);
    }

    public componentDidMount(): void {
        this.observer.observe(this.myRef.current as HTMLImageElement);
        this.myRef.current!.addEventListener('load', (event) => {
            (event.target as HTMLImageElement).classList.replace(
                'poster__image--hidden',
                'poster__image--visible'
            );
        });
    }

    public componentWillReceiveProps(nextProps: Readonly<Props>): void {
        if (this.props.src !== nextProps.src ) {
            if (this.isViewPort(this.myRef.current!)) {
                this.myRef.current!.src = nextProps.src;
            } else {
                this.myRef.current!.removeAttribute('src');
                this.myRef.current!.classList.replace(
                    'poster__image--visible',
                    'poster__image--hidden'
                );
            }
        }
    }

    private observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(item => {
            if (item.intersectionRatio > 0.9 && !(item.target as HTMLImageElement).src) {
                (item.target as HTMLImageElement).src = this.props.src;
            }
        });
    };

    private isViewPort (element: HTMLImageElement): boolean {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    public render() {
        const { src, size, ...rest } = this.props;
        return (
            <img className={classVariations('poster__image', [...(this.props.variations || []), 'hidden'])}
                 height={size}
                 width={size}
                 src={undefined}
                 ref={this.myRef}
                 {...rest as any}/>

        );
    }
}

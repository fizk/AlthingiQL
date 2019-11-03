import * as React from 'react';
import classVariations from '../../../utils/classVariations';
import './index.scss';

interface Props extends React.HTMLProps<HTMLImageElement> {
    src: string;
    size?: number;
}

export default class Portrait extends React.Component<Props> {
    public static defaultProps = {
        size: 330,
        src: undefined,
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
        this.myRef.current && this.myRef.current.addEventListener('load', (event) => {
            (event.target as HTMLImageElement).classList.replace(
                'portrait__image--hidden',
                'portrait__image--visible'
            );
        });
    }

    public UNSAFE_componentWillReceiveProps(nextProps: Readonly<Props>): void {
        if (this.props.src !== nextProps.src ) {
            if (this.myRef.current && this.isViewPort(this.myRef.current)) {
                if (this.myRef.current) {
                    this.myRef.current.src = nextProps.src
                        ? nextProps.src
                        : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';


                }
            } else {
                this.myRef.current && this.myRef.current.removeAttribute('src');
                this.myRef.current && this.myRef.current.classList.replace(
                    'portrait__image--visible',
                    'portrait__image--hidden'
                );
            }
        }
    }

    private observerCallback = (entries: IntersectionObserverEntry[]): void => {
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

    public render(): React.ReactNode {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { src, size, ...rest } = this.props;
        return (
            <div role="image" style={{height: size, width: size}} className={classVariations('portrait')}>
                <img className={classVariations('portrait__image', ['hidden'])}
                     height={size}
                     width={size}
                     src={undefined}
                     ref={this.myRef}
                     {...rest as {[key: string]: string}}/>
            </div>
        );
    }
}

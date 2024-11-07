// custom.d.ts
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      ambientLightProbe: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      arrayCamera: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      arrowHelper: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      audioListener: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      axesHelper: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      bone: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      box3Helper: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      boxBufferGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      // Add other Three.js elements as needed
    }
  }
}

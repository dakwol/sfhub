import React, { FC, ReactNode, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles.scss';
import { Navigation } from '@shared/ui/Navigation';
import useResizableMenu from '../utils/useResizeMenu';

interface Props {
  readonly contentRight: ReactNode;
  readonly contentLeft: ReactNode;
}

const PageContainer: FC<Props> = ({ contentLeft, contentRight }) => {
  const [showContent, setShowContent] = useState(false);
  const { menuWidth, menuRef, isDragging, startDragging } = useResizableMenu(35);

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, [contentRight]);

  return (
    <div className='pageContainer'>
      <div
        ref={menuRef}
        className='containerMenu'
        style={{ width: `${menuWidth}%` }}
        
      >
        <div onMouseDown={startDragging} className={`resizeContainer ${isDragging && 'isDragging'}`}></div>
        <CSSTransition
          in={showContent}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          {contentLeft}
        </CSSTransition>
        
        <Navigation position={menuWidth <= 12 && 'top-center'}/>
      </div>
      
      <div className='containerContent'>
        <CSSTransition
          in={showContent}
          timeout={700}
          classNames="fade"
          unmountOnExit
        >
          <div className="contentWrapper">
            {contentRight}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default PageContainer;

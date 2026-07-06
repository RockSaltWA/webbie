import classNames from 'classnames';
import {FC, memo, PropsWithChildren, useEffect, useRef, useState} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<
  PropsWithChildren<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; noReveal?: boolean; className?: string}>
> = memo(({children, sectionId, noPadding = false, noReveal = false, className}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (noReveal) return;
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {rootMargin: '0px 0px -80px 0px', threshold: 0.1},
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [noReveal]);

  return (
    <section
      className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding, reveal: !noReveal})}
      data-visible={noReveal ? undefined : isVisible}
      id={sectionId}
      ref={sectionRef}>
      <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
    </section>
  );
});

Section.displayName = 'Section';
export default Section;

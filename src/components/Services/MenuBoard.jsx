import Container from '@/components/Common/Container/Container';
import Reveal from '@/components/Common/Reveal/Reveal';
import MenuGalleryRail from '@/components/Services/MenuGalleryRail';
import styles from './MenuBoard.module.css';

const VELVET_HOUR_MENU = [
  { name: 'Midnight chocolate sphere', note: 'meringue, hazelnut, cold crémeux', price: '£11' },
  { name: 'Citrus coupe', note: 'dark chocolate, candied peel, lace table', price: '£9' },
  { name: 'Salted honey flatbread', note: 'halloumi, labneh, pomegranate', price: '£10' },
  { name: 'Archway sandwich', note: 'fried fillet, pickles, pink plate', price: '£12' },
];

const DAYLIGHT_MENU = [
  { name: 'Marble brunch for two', note: 'toast, skillet, crepes — share', price: '£28' },
  { name: 'Warm pudding pour', note: 'custard from the pitcher, pink plate', price: '£8' },
  { name: 'Stone-fruit skillet', note: 'brown butter, crème fraîche, shared', price: '£14' },
];

const SEASONAL_MENU = [
  { name: 'Carrot cake tin', note: 'spice, cream cheese frost, travels well', price: '£14' },
  { name: 'Pistachio travel cake', note: 'crumb topping, gold spoon optional', price: '£13' },
  { name: 'Park bench pairing', note: 'tin + filter coffee, afternoon only', price: '£11' },
  { name: 'Cold coupe to-go', note: 'chocolate, orange peel, lace napkin', price: '£9' },
];

function MenuList({ items, startIndex = 0 }) {
  return (
    <ul className={styles.menuList}>
      {items.map((item, index) => (
        <li key={item.name} className={styles.menuItem}>
          <span className={styles.menuItemIndex} aria-hidden="true">
            {String(startIndex + index + 1).padStart(2, '0')}
          </span>
          <span className={styles.menuItemBody}>
            <span className={styles.menuItemName}>
              {item.name}
              <span className={styles.note}>{item.note}</span>
            </span>
            <span className={styles.menuPrice}>{item.price}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function MenuBoard() {
  return (
    <div className={styles.pageBody}>
      <Container className={styles.menuColumns}>
        <Reveal className={styles.menuColumn}>
          <h2 className={styles.menuHeading}>Velvet hour</h2>
          <MenuList items={VELVET_HOUR_MENU} startIndex={0} />
          <h2 className={styles.menuHeading}>Daylight</h2>
          <MenuList items={DAYLIGHT_MENU} startIndex={VELVET_HOUR_MENU.length} />
        </Reveal>

        <Reveal className={styles.menuColumn} delay={100}>
          <div id="seasonal">
          <h2 className={styles.menuHeading}>Seasonal tins</h2>
          <MenuList
            items={SEASONAL_MENU}
            startIndex={VELVET_HOUR_MENU.length + DAYLIGHT_MENU.length}
          />
          <p className={styles.seasonalNote}>
            We batch tins on Wednesdays; when the board says &ldquo;gone,&rdquo; it is not theatre.
          </p>
          </div>
        </Reveal>
      </Container>

      <MenuGalleryRail />
    </div>
  );
}

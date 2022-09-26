import styles from './Gamesort.module.scss';

function Gamesort(){
    return(
    <div className={styles.gamesort}>
      <div className={styles.gamesorttop}>
          <a href="/">All Games () <span className={styles.underline}></span></a>
          <a href="/">All Providers<img className={styles.dropdown} src="/img/dropdown.svg" alt=""/></a>
          <div className={styles.searchbox}>
              <input  name="search" placeholder="Search Games..."/>
              <img  src="/img/loop.svg" alt=""/>
          </div>
      </div>
      <span className={styles.gamesortline}></span>
      <div className={styles.gamesortbottom}>
          <div className={styles.types}><img src="/img/videoslots.svg" alt="Video Slots"/>
              <span>Video Slots</span>
          </div>
          <div className={styles.types}><img src="/img/popularslot.svg" alt="Popular Slots"/>
              <span>Popular Slots</span>
          </div>
          <div className={styles.types}><img src="/img/FAV.svg" alt="FAV"/>
              <span>FAV</span>
          </div>
          <div className={styles.types}><img src="/img/newgames.svg" alt="New Games"/>
              <span>New Games</span>
          </div>
          <div className={styles.types}><img src="/img/tablegames.svg" alt="Table Games"/>
              <span>Table Games</span>
          </div>
          <div className={styles.types}><img src="/img/jackpotgames.svg" alt="Jackpot Games"/>
              <span>Jackpot Games</span>
          </div>
          <div className={styles.types}><img src="/img/videopoker.svg" alt="Video Poker"/>
              <span>Video Poker</span>
          </div>
          <div className={styles.types}><img src="/img/more.svg" alt="More"/>
              <span >More</span>
          </div>
      </div>
    </div>
)
}
export default Gamesort;
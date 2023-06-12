import styles from "./styles.module.scss";

export default function AddressesPage() {
  return (
    <div className={styles.tableWrapper}>
      <table>
        <tbody>
          <tr>
            <td className={styles.tdName}>Company:</td>
            <td className={styles.tdInfo}>"Restaurants Food & Drinks"</td>
          </tr>

          <tr>
            <td className={styles.tdName}>Address:</td>
            <td className={styles.tdInfo}>
              60 WALL ST, NEW YORK, NY 10005-2836, USA
            </td>
          </tr>

          <tr>
            <td className={styles.tdName}>Phone:</td>
            <td className={styles.tdInfo}>+212 123456789</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

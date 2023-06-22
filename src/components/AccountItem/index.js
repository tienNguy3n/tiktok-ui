import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avartar')}
                src="https://lh3.googleusercontent.com/ogw/AOLn63Exd9CV8SMhKKCH9KuZ7-krFN5NdTuJV5-K3ZLW1Q=s32-c-mo"
                alt="Tien"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Tien Nguyen</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>tiennguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;

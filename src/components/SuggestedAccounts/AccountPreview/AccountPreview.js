import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://lh3.googleusercontent.com/ogw/AOLn63Exd9CV8SMhKKCH9KuZ7-krFN5NdTuJV5-K3ZLW1Q=s32-c-mo"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    tiennguyen
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />
                </h4>
                <p className={cx('name')}>Tiến Nguyễn</p>
                <div className={cx('analytics')}>
                    <h4 className={cx('value')}>8.2M</h4>
                    <span className={cx('label')}>Followers</span>
                    <h4 className={cx('value')}>8.2M</h4>
                    <span className={cx('label')}>Likes</span>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;

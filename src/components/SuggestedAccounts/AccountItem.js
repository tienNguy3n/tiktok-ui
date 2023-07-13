import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({}) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive delay={[800, 0]} placement="bottom" offset={[-20, 0]} render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avartar')}
                    src="https://lh3.googleusercontent.com/ogw/AOLn63Exd9CV8SMhKKCH9KuZ7-krFN5NdTuJV5-K3ZLW1Q=s32-c-mo"
                    alt=""
                />

                <div className={cx('item-info')}>
                    <h4 className={cx('nickname')}>
                        tiennguyen
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />
                    </h4>
                    <p className={cx('name')}>Tiến Nguyễn</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

import React, { useEffect } from 'react';
import { isMatch } from 'lodash';
import { useIntl, defineMessages } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { getSubFooter } from '../actions';
import { getItemsByPath } from '../utils';
import { Menu } from 'semantic-ui-react';

const messages = defineMessages({
  subfooter_selected: {
    id: 'subfooter-selected',
    defaultMessage: 'Subfooter',
  },
  subfooter_aria: {
    id: 'subfooter-arialabel',
    defaultMessage: 'Subfooter',
  },
});

const SubFooter = ({ pathname }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const menuItems = useSelector((state) => state.subFooter?.result);
  const items = getItemsByPath(menuItems, pathname)?.filter(
    (item) => item.visible,
  );

  useEffect(() => {
    dispatch(getSubFooter());
  }, [dispatch]);

  const isMenuActive = (itemUrl = '') => {
    const url = flattenToAppURL(itemUrl);
    const currrentPath = pathname ?? '';

    return (
      (url === '' && (currrentPath === '/' || currrentPath === '')) ||
      (url !== '' && isMatch(currrentPath.split('/'), url.split('/')))
    );
  };

  return (
    items?.length > 0 && (
      <nav
        className="subfooter"
        role="navigation"
        aria-label={intl.formatMessage(messages.subfooter_aria)}
      >
        <Menu stackable pointing secondary>
          {items.map((item, i) => {
            let url = item.href || item.linkUrl?.[0]?.['@id'] || '';

            return (
              <UniversalLink
                href={url === '' ? '/' : flattenToAppURL(url)}
                key={i}
                className={`item ${isMenuActive(url) && 'active'}`}
              >
                <span className={item.inEvidence ? 'in-evidence' : ''}>
                  {item.title}
                </span>
                {isMenuActive(url) && (
                  <span className="sr-only">
                    {intl.formatMessage(messages.subfooter_selected)}
                  </span>
                )}
              </UniversalLink>
            );
          })}
        </Menu>
      </nav>
    )
  );
};

SubFooter.propTypes = {};

export default SubFooter;

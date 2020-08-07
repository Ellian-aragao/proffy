import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (proprieties) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" id="logo-proffy" />
      </div>

      <div className="header-content">
        <strong>{proprieties.title}</strong>
        {proprieties.description && <p>{proprieties.description}</p>}
      </div>
      {proprieties.children}
    </header>
  )
}

export default PageHeader;

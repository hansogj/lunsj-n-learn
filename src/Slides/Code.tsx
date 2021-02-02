import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import { pallet } from './constants';
import { base_X } from './StyledComponents/style.utils';
interface CodeProp {
  file: string;
  language?: string;
}

const FileName = styled.pre`
  color: ${pallet.gray_3};
  font-weight: 300;
  margin: ${base_X(2)} 0;
  &:first-of-type {
    margin-top: 0;
  }
`;

const host = 'http://localhost:3000';

const Code = ({ file, language = 'tsx' }: CodeProp) => {
  const [src, setSrc] = useState('....');

  useEffect(() => {
    axios.get(`${host}/${file}`).then((res: AxiosResponse<string>) => {
      setSrc(res.data);
    });
  }, [file]);

  return (
    <>
      <FileName>{file}</FileName>
      <SyntaxHighlighter className="box" showLineNumbers language={language} style={styles.vscDarkPlus}>
        {src}
      </SyntaxHighlighter>
    </>
  );
};

export default Code;
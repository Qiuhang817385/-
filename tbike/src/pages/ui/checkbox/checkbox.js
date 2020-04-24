import React, { useState } from 'react'
import { Checkbox, Card, Button } from 'antd';
import './style.scss'
export default function Checkboxs () {
  /**
   * 受控
   */
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  /**
   * 全选
   */
  const [checkedList, setCheckedList] = useState(['Apple', 'Orange']);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false)

  function onChange (e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ];
  /**
   * 受控
   */
  let toggleChecked = () => {
    setChecked((prev) => { return !prev })
  };

  let toggleDisable = () => {
    setDisabled((prev) => { return !prev })
  };
  /**
   * 全选
   */
  let onChangeAll = (checkedList) => {
    setCheckedList(checkedList);
    setIndeterminate(!!checkedList.length && checkedList.length < plainOptions.length);
    setCheckAll(checkedList.length === plainOptions.length)
  }
  let onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }
  return (
    <>
      <Card title="复选框1" className="card-wrap">
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
      </Card>
      <Card title="从数组中生成" className="card-wrap">
        <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
        <hr />
        <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
        <hr />
        <Checkbox.Group options={optionsWithDisabled} defaultValue={['Apple']} onChange={onChange} disabled />
      </Card>
      <Card title="受控" className="card-wrap">
        <Checkbox onChange={onChange} checked={checked} disabled={disabled}>Checkbox</Checkbox>
        <p>
          <Button type="primary" onClick={toggleChecked}>
            {!checked ? 'Check' : 'Uncheck'}
          </Button>
          <Button type="primary" onClick={toggleDisable}>
            {!disabled ? 'Disable' : 'Enable'}
          </Button>
        </p>
      </Card>
      <Card title="全选" className="card-wrap">
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Check all
          </Checkbox>
        <Checkbox.Group
          options={plainOptions}
          value={checkedList}
          onChange={onChangeAll}
        />
      </Card>
    </>
  )
}

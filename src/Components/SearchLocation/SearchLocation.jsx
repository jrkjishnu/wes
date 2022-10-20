import ss from './SearchLocation.module.scss'
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Select} from "antd";
import axios from 'axios'
import { AutoComplete } from 'antd/lib';
import Notification from '../../Utils/Notification.js'
import { Form } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, regionDetails, showResults } from '../../Api/countries';
const { Option } = Select;

const SearchLocation = ({searchData}) => {
  const dispatch = useDispatch()
  let history = useHistory()
  const [selectedOption, setSelectedOption] = useState('')
  // const [countries, setCountries] = useState([])
  const [selectedRegion, setSelectedRegion] = useState('Select a Region')

  const countries = useSelector(state => state.countryReducer.country.data)
  useEffect(() => {
    dispatch(fetchCountries())
  }, [])

  const handleSelect = (e) => {
    setSelectedOption(e)
  }
  const handleOnchange = (e) => {
    setSelectedRegion('Select a Region')
    setSelectedOption('')
  }

  const handleSubmit = () => {
    if (selectedOption && selectedRegion !== 'Select a Region') {
      const countryDetails = countries.find((cn) => cn.value === selectedOption)
      const regions = countryDetails.region.find((id) => id.id === selectedRegion)
      const details = {
        country: selectedOption,
        region: selectedRegion,
        regionName: regions.attributes.regions,
        countrycode: countryDetails.countrycode,
        continent: countryDetails.continent
      }
      dispatch(regionDetails(details))
      dispatch(showResults())
      history.push({ pathname: "/search", state: {details: details} })
    }
    else{
      Notification('info','Please Select Region and Country')
    }
  }

  const filterOption = (inputValue,option)=>{
        if(selectedOption !== '')
        {
          return true
        }

        if(selectedOption !== '')
        {
          inputValue = ''

        }
        const value =  option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        return value
  }

  const getRegion = ()=>{
    const regionOptions = <Select defaultValue="Sele" value={selectedRegion} onChange={(e) => setSelectedRegion(e)}>
    {selectedOption ?
      // countries.regions[countries.findIndex(x => x.value === selectedOption)].map((values,index)=>{
      //   //  return <Option key={index} value={values}>{values}</Option>
      // })
      countries[countries.findIndex(x => x.value === selectedOption)].region.map((val, index) => {
        return <Option defaultValue key={index} value={val.id}>{val.attributes.regions}</Option>
      })
      : countries.map((val, id) => {
        return val.region.map((valuess) => {
          return <Option value={valuess.id}>{valuess.attributes.regions}</Option>

        })
      })}
  </Select>

  return regionOptions
  }
  return (
    <div className={ss.search_wrap}>
      <div className={ss.serch_bar}>
        <div className={ss.location} >
          <p>{searchData.Search_Text}</p>
        </div>
        <Form className={ss.form_group}>
          <div className={ss.select_box}>
            <div className={ss.serch_box}>
              <label>Country</label>
              <AutoComplete          
                options={countries}
                onChange={(e) => handleOnchange(e)}
                onSelect={(e) => handleSelect(e)}
                // value={selectedOption}
                placeholder="Select a Country"
                filterOption={(inputValue,option)=>filterOption(inputValue,option)}
              />
            </div>
            <div className={ss.serch_box}>
              <label>Region</label>
              {getRegion()}
            </div>
          </div>
          <div className={ss.btn_submit}>
            <button onClick={() => handleSubmit()}>Search</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SearchLocation

import React, { Component } from 'react'
import './Homepage.css';
import Header from '../Header/Header';

export default class homepage extends Component {

    render() {
        var now = new Date();
        var datetime = now.toLocaleString().split(",")[0];
        return (
            <div class="row">
                <Header />
                <div class="row">
                    <div class="column">
                        <form>
                            <label>New Job</label>
                            <br />
                            <label>
                                URL:
                                <input type="text"></input>
                                <button>Autofill</button>
                            </label>
                            <br />
                            <label>
                                Company:
                                <input type="text"></input>
                            </label>
                            <br />
                            <label>
                                Title:
                                <input type="text"></input>
                            </label>
                            <br />
                            <label>
                                Work Type:
                                <select>
                                    <option>Remote</option>
                                    <option>Hybrid</option>
                                    <option>In Person</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                Location:
                                <select>
                                    <option>N/A</option>
                                    <option>Within 15 min</option>
                                    <option>Within 30 min</option>
                                    <option>Within 45 min</option>
                                    <option>Within an hour</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                Salary:
                                <select>
                                    <option>Unknown</option>
                                    <option>60,000 - 80,000</option>
                                    <option>80,000 - 100,000</option>
                                    <option>100,000 - 120,000</option>
                                    <option>120,000+</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                Notes:
                                <textarea></textarea>
                            </label>
                            <br />
                            <label>
                                Contacts:
                                <textarea></textarea>
                            </label>
                            <br />
                            <button>Track</button>
                        </form>
                    </div>
                    <div class="column">
                        <label>
                            Date: {datetime}
                        </label>
                        <br />
                        <label>
                            Goal:
                            <input type="number"></input>
                            <button>Add</button>
                        </label>
                        <br />
                        <label>
                            My Info
                        </label>
                        <br />
                        <label>
                            Previous Roles:
                        </label>
                        <br />
                        <label>
                            Skills:
                        </label>
                        <br />
                        <label>
                            Links:
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

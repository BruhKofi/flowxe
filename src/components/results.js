import React from 'react';

const Results = ({ results }) => (
    <div>
        <h1>Results</h1>
    <div className='row'>
        {results ?
            <div className='col-md-12'>
                {results.type === 'error'
                    ? <p className='text-danger'>Error occured executing flow</p>
                    : <div className='row'>
                        <ul>
                            {results.data.map((result, i) => (
                                <li key={i} className={result.status === 'passed' ? 'text-success' : 'text-danger'}>
                                    rule {result.id} {result.status}
                                    {i === results.data.length - 1 ? <span className='text-secondary'>End</span> : null}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div> :
            null
        }
    </div>
    </div>
);

export default Results;

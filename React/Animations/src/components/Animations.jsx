import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Animations.css';

export function Animation() {
    const [showBox, setShowBox] = useState(false);
    const [items, setItems] = useState([
        { id: 1, text: 'Learn JSX' },
        { id: 2, text: 'Understand State' },
    ]);
    const [count, setCount] = useState(3);

    // ref for the appear box
    const boxRef = useRef(null);

    // single ref object to hold refs for list items (id -> { current: ... })
    const itemRefs = useRef({});

    useEffect(() => {
        const t = setTimeout(() => setShowBox(true), 300);
        return () => clearTimeout(t);
    }, []);

    function addItem() {
        const newItem = { id: count, text: `New Task ${count}` };
        setItems(prev => [...prev, newItem]);
        setCount(c => c + 1);
    }

    function removeItem(id) {
        // animate out by removing from state; TransitionGroup + CSSTransition will handle exit
        setItems(prev => prev.filter(item => item.id !== id));

        // cleanup the ref after the exit animation finishes (timeout 400ms in the example CSS)
        // give a bit extra (500ms) to be safe
        setTimeout(() => {
            delete itemRefs.current[id];
        }, 500);
    }

    function clearAll() {
        setItems([]);
        itemRefs.current = {};
    }

    return (
        <div className="min-h-screen p-6 bg-gray-50 font-sans">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">React Animations: CSSTransition & TransitionGroup</h1>

                {/* APPEAR animation */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Appear animation (mount)</h2>

                    <CSSTransition
                        in={showBox}
                        timeout={500}
                        classNames="fade-grow"
                        appear
                        unmountOnExit
                        nodeRef={boxRef}
                    >
                        <div ref={boxRef} className="p-6 rounded-lg shadow-md bg-white border">
                            <p className="text-lg font-medium">
                                Hello — I used the <code>appear</code> animation!
                            </p>
                            <button className="mt-3 px-3 py-1 rounded bg-indigo-600 text-white" onClick={() => setShowBox(false)}>
                                Hide
                            </button>
                        </div>
                    </CSSTransition>

                    {!showBox && (
                        <button className="mt-3 px-3 py-1 rounded bg-green-600 text-white" onClick={() => setShowBox(true)}>
                            Show again
                        </button>
                    )}
                </section>

                {/* ENTER & LEAVE animations */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">Enter & Leave animations (list)</h2>

                    <div className="mb-4">
                        <button className="mr-2 px-3 py-1 rounded bg-blue-600 text-white" onClick={addItem}>
                            Add item
                        </button>
                        <button className="px-3 py-1 rounded bg-red-600 text-white" onClick={clearAll}>
                            Clear all
                        </button>
                    </div>

                    <TransitionGroup component="ul" className="space-y-2 list-none p-0">
                        {items.map(item => {
                            // create a stable ref-like object for this id if it doesn't exist
                            if (!itemRefs.current[item.id]) {
                                itemRefs.current[item.id] = { current: null };
                            }
                            const nodeRef = itemRefs.current[item.id];

                            return (
                                <CSSTransition
                                    key={item.id}
                                    nodeRef={nodeRef}
                                    timeout={400}
                                    classNames="slide-fade"
                                    unmountOnExit
                                >
                                    <li ref={nodeRef} className="p-3 rounded border bg-white shadow-sm flex justify-between items-center">
                                        <span>{item.text}</span>
                                        <div>
                                            <button className="mr-2 px-2 py-1 rounded bg-gray-200" onClick={() => alert(item.text)}>
                                                Info
                                            </button>
                                            <button className="px-2 py-1 rounded bg-pink-500 text-white" onClick={() => removeItem(item.id)}>
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                                </CSSTransition>
                            );
                        })}
                    </TransitionGroup>
                </section>
            </div>
        </div>
    );
}

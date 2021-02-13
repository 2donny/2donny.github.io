import React from 'react';
import { Link } from 'react-router-dom';
import Footer_nav from '../components/footer_nav';
import Layout from '../components/layout';
import { personCommunity } from '../model/person';
import Card from '../components/card';

const Article = ({ match }) => {
    const cnt = match.params.cnt; // id는 글의 고유 번호
    const __ArticleArr = personCommunity.filter(user => {
        return user.id === Number(cnt)
    });
    const __Article = __ArticleArr[0];
    return (
        <div className="w-full">
            <Layout>
                {/* Navigation */}
                <nav className="flex flex-row justify-between px-3 py-5"> 
                    <Link to="/person">
                        <img 
                            src="/arrow-back-outline.svg"
                            className="rounded-2xl"
                            width={25}
                            height={25}
                        />
                    </Link>
                    <div className="flex flex-row">
                        <img 
                            src="/NavImage/heart-outline.svg"
                            alt="heart"
                            width={25}
                            height={25}
                            className="mx-3"
                        />
                        <img 
                            src="/Article/ellipsis-vertical-outline.svg"
                            alt="heart"
                            width={25}
                            height={25}
                            className="mx-3"
                        />
                        
                    </div>
                </nav>
                <div className="border-b-2"></div>

                {/* main */}
                <main>

                    {/* Card, Button */}
                    <section>
                        <Card 
                        key={cnt}
                        id={__Article.id}
                        profileImg={__Article.profileImg} 
                        description={__Article.description} 
                        displayName={__Article.displayName} 
                        heartCnt={__Article.heartCnt}
                        contents={__Article.contents}
                        tags={__Article.tags} 
                        />
                        <div className="flex flex-row mb-2">
                            <div className="flex flex-row mx-2">
                                <img 
                                    src="/Article/heart-circle-outline.svg"
                                    alt="heart"
                                    width={20}
                                    height={20}
                                    className="mx-2"
                                />
                                <h1 className="text-xs">좋아요</h1>
                            </div>
                            <div className="flex flex-row mx-2">
                                <img 
                                    src="/Article/chatbubble-outline.svg"
                                    alt="chat"
                                    width={15}
                                    height={15}
                                    className="mx-2"
                                />
                                <h1 className="text-xs">댓글</h1>
                            </div>
                        </div>
                    </section>

                    <section className="h-8 bg-gray-100 border-b-2 border-t-2">
                        <p className="text-xs text-center text-gray-500 leading-6 ">연고링에서 따뜻한 <strong className="text-blue-300 inline-block">소개팅 문화</strong>를 함께 만들어가요 🌟</p>
                    </section>
                    {/* Comments section */}
                    <section>

                    </section>
                </main>
                
                {/* footer */}
                <Footer_nav />
            </Layout>
        </div>
    )
}

export default Article;